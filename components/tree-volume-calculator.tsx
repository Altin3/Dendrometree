'use client'

import { useMemo, useState } from 'react'
import { Download, Plus, Trash2, Calculator } from 'lucide-react'

import { Button } from '@/components/ui/button'

type SpeciesOption = {
  label: string
  value: string
  group: 'Broadleaves' | 'Conifers'
}

type ResultRow = {
  id: number
  species: string
  dbh_cm: number
  height_m: number
  form_factor: number
  estimated_volume_m3: number
  method: string
  timestamp: string
}

const speciesOptions: SpeciesOption[] = [
  { label: 'Fagus sylvatica', value: 'Fagus sylvatica', group: 'Broadleaves' },
  { label: 'Quercus cerris', value: 'Quercus cerris', group: 'Broadleaves' },
  { label: 'Quercus petraea', value: 'Quercus petraea', group: 'Broadleaves' },
  { label: 'Quercus frainetto', value: 'Quercus frainetto', group: 'Broadleaves' },
  { label: 'Carpinus betulus', value: 'Carpinus betulus', group: 'Broadleaves' },
  { label: 'Fraxinus excelsior', value: 'Fraxinus excelsior', group: 'Broadleaves' },

  { label: 'Picea abies', value: 'Picea abies', group: 'Conifers' },
  { label: 'Abies alba', value: 'Abies alba', group: 'Conifers' },
  { label: 'Pseudotsuga menziesii', value: 'Pseudotsuga menziesii', group: 'Conifers' },
  { label: 'Pinus peuce', value: 'Pinus peuce', group: 'Conifers' },
  { label: 'Pinus heldreichii', value: 'Pinus heldreichii', group: 'Conifers' },
  { label: 'Pinus sylvestris', value: 'Pinus sylvestris', group: 'Conifers' },
  { label: 'Pinus nigra', value: 'Pinus nigra', group: 'Conifers' },
]

const DEFAULT_SPECIES = 'Fagus sylvatica'
const DEFAULT_FORM_FACTOR = 0.45
const METHOD_NAME = 'Generic form-factor estimator'

function calculateTreeVolume(dbhCm: number, heightM: number, formFactor = DEFAULT_FORM_FACTOR) {
  const dbhM = dbhCm / 100
  const radiusM = dbhM / 2
  const basalAreaM2 = Math.PI * radiusM * radiusM
  return formFactor * basalAreaM2 * heightM
}

function toCsv(rows: ResultRow[]) {
  const headers = [
    'species',
    'dbh_cm',
    'height_m',
    'form_factor',
    'estimated_volume_m3',
    'method',
    'timestamp',
  ]

  const escapeCsv = (value: string | number) => {
    const str = String(value)
    if (str.includes(',') || str.includes('"') || str.includes('\n')) {
      return `"${str.replace(/"/g, '""')}"`
    }
    return str
  }

  const lines = [
    headers.join(','),
    ...rows.map((row) =>
      [
        row.species,
        row.dbh_cm,
        row.height_m,
        row.form_factor,
        row.estimated_volume_m3,
        row.method,
        row.timestamp,
      ]
        .map(escapeCsv)
        .join(','),
    ),
  ]

  return lines.join('\n')
}

export function TreeVolumeCalculator() {
  const [species, setSpecies] = useState(DEFAULT_SPECIES)
  const [dbhCm, setDbhCm] = useState('')
  const [heightM, setHeightM] = useState('')
  const [latestVolume, setLatestVolume] = useState<number | null>(null)
  const [rows, setRows] = useState<ResultRow[]>([])
  const [error, setError] = useState('')

  const groupedSpecies = useMemo(
    () => ({
      Broadleaves: speciesOptions.filter((item) => item.group === 'Broadleaves'),
      Conifers: speciesOptions.filter((item) => item.group === 'Conifers'),
    }),
    [],
  )

  const handleCalculate = () => {
    const dbh = Number(dbhCm)
    const height = Number(heightM)

    if (!dbh || !height || dbh <= 0 || height <= 0) {
      setError('Please enter valid positive values for DBH and height.')
      setLatestVolume(null)
      return
    }

    const volume = calculateTreeVolume(dbh, height)
    setLatestVolume(volume)
    setError('')
  }

  const handleAddResult = () => {
    const dbh = Number(dbhCm)
    const height = Number(heightM)

    if (!dbh || !height || dbh <= 0 || height <= 0) {
      setError('Please enter valid positive values for DBH and height.')
      return
    }

    const volume = calculateTreeVolume(dbh, height)

    const newRow: ResultRow = {
      id: Date.now(),
      species,
      dbh_cm: dbh,
      height_m: height,
      form_factor: DEFAULT_FORM_FACTOR,
      estimated_volume_m3: Number(volume.toFixed(4)),
      method: METHOD_NAME,
      timestamp: new Date().toISOString(),
    }

    setRows((prev) => [...prev, newRow])
    setLatestVolume(volume)
    setError('')
  }

  const handleDeleteRow = (id: number) => {
    setRows((prev) => prev.filter((row) => row.id !== id))
  }

  const handleDownloadCsv = () => {
    if (rows.length === 0) return

    const csv = toCsv(rows)
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'tree-volume-results.csv')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    URL.revokeObjectURL(url)
  }

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-card text-card-foreground shadow-sm">
          <div className="border-b border-border p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Calculator className="h-5 w-5" />
              </div>
              <div>
                <h1 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold">
                  Tree Volume Calculator
                </h1>
                <p className="mt-1 text-sm text-muted-foreground">
                  Generic estimator using DBH, height, and a default form factor of {DEFAULT_FORM_FACTOR}.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <label htmlFor="species" className="text-sm font-medium">
                  Species
                </label>
                <select
                  id="species"
                  value={species}
                  onChange={(e) => setSpecies(e.target.value)}
                  className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <optgroup label="Broadleaves">
                    {groupedSpecies.Broadleaves.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </optgroup>

                  <optgroup label="Conifers">
                    {groupedSpecies.Conifers.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="dbh" className="text-sm font-medium">
                  DBH (cm)
                </label>
                <input
                  id="dbh"
                  type="number"
                  min="0"
                  step="0.1"
                  value={dbhCm}
                  onChange={(e) => setDbhCm(e.target.value)}
                  placeholder="e.g. 32.5"
                  className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="height" className="text-sm font-medium">
                  Height (m)
                </label>
                <input
                  id="height"
                  type="number"
                  min="0"
                  step="0.1"
                  value={heightM}
                  onChange={(e) => setHeightM(e.target.value)}
                  placeholder="e.g. 21.4"
                  className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button onClick={handleCalculate} className="bg-primary text-primary-foreground hover:bg-primary/90">
                Calculate Volume
              </Button>

              <Button onClick={handleAddResult} variant="outline" className="bg-transparent">
                <Plus className="h-4 w-4" />
                Add Result
              </Button>

              <Button
                onClick={handleDownloadCsv}
                variant="outline"
                className="bg-transparent"
                disabled={rows.length === 0}
              >
                <Download className="h-4 w-4" />
                Download CSV
              </Button>
            </div>

            {error ? (
              <div className="mt-4 rounded-lg border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                {error}
              </div>
            ) : null}

            {latestVolume !== null ? (
              <div className="mt-6 rounded-xl border border-border bg-muted/30 p-5">
                <div className="text-sm text-muted-foreground">Estimated volume</div>
                <div className="mt-1 text-3xl font-bold text-primary">{latestVolume.toFixed(4)} m³</div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Method: {METHOD_NAME} · Form factor: {DEFAULT_FORM_FACTOR}
                </div>
              </div>
            ) : null}

            <div className="mt-8 rounded-xl border border-border bg-background/50 p-4 text-sm text-muted-foreground">
              This calculator provides an approximate tree stem volume using a generic form-factor method. Results are
              estimates and should not replace species-specific or regional forestry volume equations.
            </div>

            <div className="mt-8">
              <div className="mb-3 flex items-center justify-between gap-4">
                <h2 className="text-lg font-semibold">Saved Results</h2>
                <span className="text-sm text-muted-foreground">{rows.length} row(s)</span>
              </div>

              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="min-w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr className="text-left">
                      <th className="px-4 py-3 font-medium">Species</th>
                      <th className="px-4 py-3 font-medium">DBH (cm)</th>
                      <th className="px-4 py-3 font-medium">Height (m)</th>
                      <th className="px-4 py-3 font-medium">Volume (m³)</th>
                      <th className="px-4 py-3 font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-4 py-6 text-center text-muted-foreground">
                          No results added yet.
                        </td>
                      </tr>
                    ) : (
                      rows.map((row) => (
                        <tr key={row.id} className="border-t border-border">
                          <td className="px-4 py-3">{row.species}</td>
                          <td className="px-4 py-3">{row.dbh_cm}</td>
                          <td className="px-4 py-3">{row.height_m}</td>
                          <td className="px-4 py-3 font-medium text-primary">
                            {row.estimated_volume_m3.toFixed(4)}
                          </td>
                          <td className="px-4 py-3">
                            <button
                              type="button"
                              onClick={() => handleDeleteRow(row.id)}
                              className="inline-flex items-center gap-1 text-sm text-muted-foreground transition hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
