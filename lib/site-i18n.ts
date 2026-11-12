export type SiteLanguage = "sq" | "en"

export function homeHref(language: SiteLanguage): string {
  return language === "sq" ? "/" : "/en"
}

export function sectionHref(language: SiteLanguage, section: string): string {
  return `${homeHref(language)}#${section}`
}

export function calculatorHref(language: SiteLanguage): string {
  return language === "sq" ? "/kalkulatori-i-vellimit" : "/en/tree-volume-calculator"
}

export const siteCopy = {
  sq: {
    nav: {
      services: "Shërbimet", about: "Rreth nesh", process: "Procesi",
      projects: "Projektet", activities: "Aktivitetet", gis: "GIS", contact: "Kontakt",
      contactUs: "Na kontaktoni", switch: "English", home: "Ballina",
    },
    hero: {
      badge: "Menaxhim i qëndrueshëm i pyjeve",
      title: "Zgjidhje profesionale në pylltari dhe GIS",
      text: "Inventarizim i saktë i pyjeve, hartografi e avancuar GIS dhe plane të qëndrueshme menaxhimi. Ndihmojmë komunat, institucionet dhe pronarët e pyjeve të marrin vendime të bazuara në të dhëna.",
      consultation: "Kërkoni konsultim", explore: "Shiko shërbimet", calculator: "Llogaritësi i vëllimit të drurit",
      completed: "Projekte të përfunduara", years: "Vite përvojë", mapped: "Hektarë të hartografuar",
      inventory: "Inventarizim", analytics: "Analiza", remote: "Teledetektim",
    },
    services: {
      eyebrow: "Çfarë bëjmë",
      title: "Shërbime profesionale për të gjitha fazat e menaxhimit të pyjeve",
      description: "Nga inventarizimi fillestar te planifikimi afatgjatë, ofrojmë zgjidhje të përshtatura sipas nevojave tuaja.",
      cards: [
        {title: "Inventarizimi pyjor", description: "Matje profesionale në terren dhe analiza statistikore për vlerësimin e resurseve pyjore, përbërjes sipas llojeve dhe karakteristikave të grumbujve."},
        {title: "Planet e menaxhimit", description: "Hartimi i planeve afatgjata të menaxhimit të pyjeve, duke harmonizuar qëndrueshmërinë ekologjike, përfitimet ekonomike dhe kërkesat ligjore."},
        {title: "GIS dhe hartografia", description: "Analiza të avancuara hapësinore, harta të specializuara dhe menaxhim i të dhënave gjeohapësinore për vendimmarrje të informuar."},
        {title: "Teledetektimi", description: "Analizë e imazheve satelitore dhe ajrore për monitorimin e shëndetit të pyjeve, zbulimin e ndryshimeve dhe vlerësimin e peizazheve."},
        {title: "Grumbullimi i të dhënave në terren", description: "Ekipe profesionale dhe teknologji bashkëkohore për grumbullim të saktë e efikas të të dhënave në terrene të ndryshme."},
        {title: "Konsulencë profesionale", description: "Këshillim për certifikim pyjor, karbonin, ruajtjen e biodiversitetit dhe praktikat e shfrytëzimit të qëndrueshëm."},
      ],
    },
    about: {
      eyebrow: "Rreth nesh",
      title: "Partner i besueshëm për menaxhimin e qëndrueshëm të pyjeve",
      p1: "DENDROMETREE është kompani e specializuar në konsulencë pyjore, inventarizim, hartografi GIS dhe planifikim të menaxhimit të qëndrueshëm. Ekspertiza profesionale ndërthuret me teknologjinë bashkëkohore gjeohapësinore.",
      p2: "Misioni ynë është t'u ndihmojmë pronarëve të pyjeve, komunave dhe institucioneve të marrin vendime të informuara, duke ruajtur ekuilibrin ndërmjet mbrojtjes së mjedisit dhe zhvillimit ekonomik.",
      highlights: [
        "Ekspertë pyjorë me kualifikim profesional",
        "Teknologji bashkëkohore GIS dhe teledetektimi",
        "Përvojë në projekte të sektorit publik dhe privat",
        "Përkushtim ndaj menaxhimit të qëndrueshëm",
        "Proces pune i orientuar drejt cilësisë",
        "Njohuri mbi ekosistemet pyjore të rajonit",
      ],
      quote: "Qasja jonë ndërthur saktësinë shkencore me zgjidhjet praktike për rezultate të matshme.",
      team: "Ekipi DENDROMETREE",
    },
    process: {
      eyebrow: "Qasja jonë", title: "Proces sistematik për rezultate të besueshme",
      description: "Metodologjia jonë synon realizimin e projekteve me cilësi, brenda afateve dhe në përputhje me kërkesat e klientit.",
      steps: [
        {title:"Konsultimi fillestar",description:"Diskutojmë objektivat, afatet dhe kërkesat për të kuptuar nevojat specifike të projektit pyjor."},
        {title:"Planifikimi i projektit",description:"Përgatisim metodologjinë e punës, burimet e nevojshme dhe kalendarin e rezultateve."},
        {title:"Grumbullimi i të dhënave",description:"Kryejmë matje në terren dhe përdorim teknologjitë e teledetektimit për të dhëna të sakta."},
        {title:"Analiza dhe raportimi",description:"Përpunojmë të dhënat dhe përgatisim analiza, harta e rekomandime profesionale për menaxhimin."},
      ],
    },
    projects: {
      eyebrow:"Studime të rasteve",title:"Projektet e përzgjedhura",
      description:"Shembuj të punës sonë profesionale në lloje dhe kontekste të ndryshme pyjore.",
      cards:[
        {title:"Inventarizim pyjor rajonal",category:"Komunal",description:"Inventarizim i 25,000 hektarëve për planifikim rajonal, duke përfshirë hartografimin e llojeve dhe parashikimin e shtimit."},
        {title:"Vlerësimi i kredive të karbonit",category:"Privat",description:"Analiza e sekuestrimit të karbonit dhe dokumentacion për verifikimin e kredive të karbonit pyjor."},
        {title:"Hartografimi i rrezikut nga zjarret",category:"Institucional",description:"Vlerësim i rrezikut nga zjarret përmes GIS dhe planifikim i menaxhimit të lëndës djegëse në zona të gjera pyjore."},
      ],
    },
    activities: {
      eyebrow:"Të rejat nga kompania",title:"Aktivitetet dhe lajmet",
      description:"Lajme dhe njoftime nga projektet tona në pylltari dhe GIS.",
      viewAll:"Shiko të gjitha aktivitetet",
      empty:"Publikimet dhe aktivitetet e reja të kompanisë do të shfaqen së shpejti këtu.",
      explore:"Shiko aktivitetet",
    },
    gis: {
      eyebrow:"Teknologjia",title:"Kapacitete të avancuara GIS dhe hartografike",
      description:"Përdorim mjete profesionale GIS dhe zgjidhje të përshtatura për pylltari, nga përpunimi i imazheve satelitore te modelimi tredimensional i terrenit.",
      cta:"Na kontaktoni për GIS",
      layers:"Analiza shumështresore",layersDesc:"Analiza hapësinore që ndërthurin të dhënat e terrenit, vegjetacionit, hidrologjisë dhe infrastrukturës.",
      data:"Menaxhimi i të dhënave",dataDesc:"Zgjidhje për organizimin, ruajtjen dhe shpërndarjen e të dhënave gjeohapësinore.",
      web:"Harta interaktive",webDesc:"Harta dhe panele interaktive për monitorimin e pyjeve dhe qasjen në të dhëna.",
      ai:"Integrimi i inteligjencës artificiale",aiDesc:"Modele për nxjerrjen automatike të informacionit dhe modelimin parashikues të pyjeve.",
      forest:"Mbulesa pyjore",protected:"Zona të mbrojtura",points:"Sipërfaqe provuese",
    },
    contact: {
      eyebrow:"Na kontaktoni",title:"Diskutojmë projektin tuaj",
      description:"Keni një projekt pyjor? Na kontaktoni për konsultim dhe për të diskutuar si mund t'ju ndihmojmë.",
      information:"Të dhënat e kontaktit",email:"Email",phone:"Telefoni",office:"Zyra",officePlace:"Ferizaj, Kosovë",
      responseTitle:"Koha e përgjigjes",responseText:"Synojmë t'u përgjigjemi kërkesave brenda 8 orëve të punës. Për çështje urgjente, na telefononi.",
      name:"Emri dhe mbiemri",emailAddress:"Adresa e emailit",organization:"Organizata (opsionale)",
      details:"Detajet e projektit",detailsPlaceholder:"Na tregoni për projektin pyjor, objektivat dhe afatet...",
      send:"Dërgo mesazhin", namePlaceholder:"Emri juaj",
    },
    footer:{
      description:"Konsulencë profesionale në pylltari, GIS dhe menaxhimin e qëndrueshëm të pyjeve për një të ardhme më të gjelbër.",
      services:"Shërbimet",company:"Kompania",legal:"Informacion ligjor",privacy:"Politika e privatësisë",
      terms:"Kushtet e përdorimit",copyright:"Të gjitha të drejtat e rezervuara.",
      slogan:"Pylltari e qëndrueshme për një të ardhme më të mirë.",
      serviceLinks:["Inventarizimi pyjor","Planet e menaxhimit","GIS dhe hartografia","Teledetektimi","Konsulencë"],
      companyLinks:["Rreth nesh","Procesi ynë","Projektet","Aktivitetet dhe lajmet","Kontakt"],
    },
    calculator: {
      title:"Llogaritësi i vëllimit të drurit",
      intro:"Vlerësim orientues mbi bazën e diametrit në lartësinë e gjoksit, lartësisë dhe koeficientit të formës",
      species:"Lloji i drurit",broadleaves:"Gjethorë",conifers:"Halorë",
      dbh:"Diametri në 1,30 m (cm)",height:"Lartësia (m)",
      calculate:"Llogarit vëllimin",add:"Shto rezultatin",download:"Shkarko CSV",
      validation:"Vendos vlera numerike pozitive për diametrin dhe lartësinë.",
      estimated:"Vëllimi i vlerësuar",method:"Metoda",factor:"Koeficienti i formës",
      note:"Ky llogaritës jep një vlerësim orientues me koeficient të përgjithshëm të formës. Rezultatet nuk zëvendësojnë ekuacionet dendrometrike specifike për llojin dhe rajonin.",
      saved:"Rezultatet e ruajtura",rows:"rreshta",volume:"Vëllimi (m³)",action:"Veprimi",
      empty:"Ende nuk është shtuar asnjë rezultat.",remove:"Hiq",methodName:"Vlerësim me koeficient të përgjithshëm të formës",
      dbhPlaceholder:"p.sh. 32.5",heightPlaceholder:"p.sh. 21.4",
    },
    metadata: {
      title:"DENDROMETREE | Pylltari, Inventarizim Pyjor dhe GIS",
      description:"Shërbime profesionale për inventarizimin pyjor, planet e menaxhimit, GIS, hartografi dhe teledetektim.",
    },
  },
  en: {
    nav: {
      services:"Services",about:"About",process:"Process",projects:"Projects",activities:"Activities",gis:"GIS",contact:"Contact",
      contactUs:"Contact Us",switch:"Shqip",home:"Home",
    },
    hero: {
      badge:"Sustainable Forest Management", title:"Expert Forestry & GIS Solutions",
      text:"Precision forest inventory, advanced GIS mapping, and sustainable management plans. We help municipalities, agencies, and landowners make data-driven decisions for their forests.",
      consultation:"Get a Consultation",explore:"Explore Services",calculator:"Tree Volume Calculator",
      completed:"Projects Completed",years:"Years Experience",mapped:"Hectares Mapped",
      inventory:"Inventory",analytics:"Analytics",remote:"Remote Sensing",
    },
    services: {
      eyebrow:"What We Do",title:"Our collection of services spans the full scope of forest management",
      description:"From initial inventory to long-term planning, we provide comprehensive solutions tailored to your specific needs.",
      cards:[
        {title:"Forest Inventory",description:"Comprehensive field measurements and statistical analysis to quantify forest resources, species composition, and stand characteristics."},
        {title:"Management Plans",description:"Strategic long-term forest management plans that balance ecological sustainability, economic returns, and regulatory compliance."},
        {title:"GIS & Mapping",description:"Advanced geospatial analysis, custom mapping solutions, and spatial data management for informed decision-making."},
        {title:"Remote Sensing",description:"Satellite and aerial imagery analysis for forest health monitoring, change detection, and landscape-scale assessments."},
        {title:"Field Data Collection",description:"Professional field crews equipped with modern technology for accurate, efficient data collection across any terrain."},
        {title:"Consulting Services",description:"Expert guidance on forest certification, carbon credits, biodiversity conservation, and sustainable harvesting practices."},
      ],
    },
    about: {
      eyebrow:"About Us",title:"A trusted partner in sustainable forest management",
      p1:"DENDROMETREE is a specialized forestry consulting firm delivering expert solutions in forest inventory, GIS mapping, and sustainable management planning. Founded by experienced foresters and geospatial professionals, we combine ecological knowledge with contemporary technology.",
      p2:"Our mission is to help landowners, municipalities, and organizations make informed decisions that balance environmental stewardship with economic viability. We believe that well-managed forests are essential to our planet's future.",
      highlights:[
        "Qualified professional foresters",
        "Advanced GIS and remote sensing capabilities",
        "Experience with public and private sector projects",
        "Commitment to sustainable forestry",
        "Quality-focused work processes",
        "Knowledge of diverse regional forest ecosystems",
      ],
      quote:"Our approach combines scientific rigor with practical solutions, ensuring every project delivers measurable results.",
      team:"DENDROMETREE Team",
    },
    process: {
      eyebrow:"Our Approach",title:"A systematic process for reliable results",
      description:"Our methodology is designed to deliver high-quality projects on time and in accordance with client requirements.",
      steps:[
        {title:"Initial Consultation",description:"We begin with a thorough discussion of your goals, timeline, and requirements to understand your specific forestry needs."},
        {title:"Project Planning",description:"Our team develops a detailed project plan including methodology, resource allocation, and deliverables timeline."},
        {title:"Data Collection",description:"Expert field crews and remote sensing technologies gather comprehensive and accurate forest data."},
        {title:"Analysis & Reporting",description:"We process collected data and produce maps, analysis and practical management recommendations."},
      ],
    },
    projects:{
      eyebrow:"Case Studies",title:"Featured projects",
      description:"A selection of projects showcasing our expertise across different forest types and client needs.",
      cards:[
        {title:"Regional Forest Inventory",category:"Municipal",description:"Comprehensive inventory of 25,000 hectares for regional planning authority, including species mapping and growth projections."},
        {title:"Carbon Credit Assessment",category:"Private",description:"Detailed carbon sequestration analysis and verification documentation for forest carbon credit certification."},
        {title:"Wildfire Risk Mapping",category:"Agency",description:"GIS-based wildfire risk assessment and fuel management planning across multi-jurisdictional forest lands."},
      ],
    },
    activities:{
      eyebrow:"Company updates",title:"Activities & News",
      description:"News and insights from our forestry and GIS work.",
      viewAll:"View all activities",empty:"Company updates and project news will appear here soon.",explore:"Explore updates",
    },
    gis: {
      eyebrow:"Technology",title:"Advanced GIS & Mapping Capabilities",
      description:"Our geospatial technology stack combines professional GIS software with custom solutions tailored to forestry. From satellite imagery processing to 3D terrain modeling, we deliver insights that support better forest management decisions.",
      cta:"Discuss Your GIS Needs",
      layers:"Multi-Layer Analysis",layersDesc:"Complex spatial analysis combining terrain, vegetation, hydrology, and infrastructure data.",
      data:"Data Management",dataDesc:"Geodatabase solutions for organizing, storing, and sharing geospatial assets.",
      web:"Web Mapping",webDesc:"Interactive web maps and dashboards for forest monitoring and stakeholder access.",
      ai:"AI Integration",aiDesc:"Machine learning models for automated feature extraction and predictive forest modeling.",
      forest:"Forest Cover",protected:"Protected Areas",points:"Sample Points",
    },
    contact:{
      eyebrow:"Get in Touch",title:"Let's discuss your project",
      description:"Ready to start your forestry project? Contact us for a consultation and discover how we can help.",
      information:"Contact Information",email:"Email",phone:"Phone",office:"Office",officePlace:"Ferizaj, Kosovo",
      responseTitle:"Response Time",responseText:"We aim to respond to inquiries within 8 business hours. For urgent matters, please call us directly.",
      name:"Full Name",emailAddress:"Email Address",organization:"Organization (Optional)",
      details:"Project Details",detailsPlaceholder:"Tell us about your forestry project, goals, and timeline...",
      send:"Send Message",namePlaceholder:"Your name",
    },
    footer:{
      description:"Expert forestry consulting, GIS mapping, and sustainable forest management solutions for a greener future.",
      services:"Services",company:"Company",legal:"Legal",privacy:"Privacy Policy",
      terms:"Terms of Service",copyright:"All rights reserved.",
      slogan:"Sustainable forestry for a better tomorrow.",
      serviceLinks:["Forest Inventory","Management Plans","GIS & Mapping","Remote Sensing","Consulting"],
      companyLinks:["About Us","Our Process","Case Studies","Activities & News","Contact"],
    },
    calculator:{
      title:"Tree Volume Calculator",
      intro:"Generic estimator using DBH, height, and a default form factor of",
      species:"Species",broadleaves:"Broadleaves",conifers:"Conifers",
      dbh:"DBH (cm)",height:"Height (m)",
      calculate:"Calculate Volume",add:"Add Result",download:"Download CSV",
      validation:"Please enter valid positive values for DBH and height.",
      estimated:"Estimated volume",method:"Method",factor:"Form factor",
      note:"This calculator provides an approximate tree stem volume using a generic form-factor method. Results are estimates and should not replace species-specific or regional forestry volume equations.",
      saved:"Saved Results",rows:"row(s)",volume:"Volume (m³)",action:"Action",
      empty:"No results added yet.",remove:"Remove",methodName:"Generic form-factor estimator",
      dbhPlaceholder:"e.g. 32.5",heightPlaceholder:"e.g. 21.4",
    },
    metadata:{
      title:"DENDROMETREE | Professional Forestry & GIS Services",
      description:"Professional forestry consulting, forest inventory, GIS mapping, remote sensing and sustainable forest management services.",
    },
  },
} as const
