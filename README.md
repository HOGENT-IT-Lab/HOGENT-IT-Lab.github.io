# <img alt="IT Lab" src="https://raw.githubusercontent.com/HOGENT-IT-Lab/HOGENT-IT-Lab.github.io/main/public/logo.png" height="40px" > HOGENT-IT-Lab.github.io

Website for IT-Lab HoGent using `GitHub Pages` and `Next.js`. Authorization with `Auth0` for upcoming features.  
https://hogent-it-lab.github.io

## 🔧 Development

### .env

```properties
NODE_ENV=development

NEXT_PUBLIC_AUTH0_DOMAIN=Auth0 Domain
NEXT_PUBLIC_AUTH0_CLIENT_ID=Auth0 Client ID
NEXT_PUBLIC_AUTH0_API_AUDIENCE=Auth0 API Audience
```

### run app

Install and update packages using `yarn install` then use `yarn dev` to run the project on a local server.

## 🚀 Projects

**Verantwoordelijken:** @JochenVanSeveren, @TieProost

## 📝 Algemene notes
2 opties om data bij te houden:
- 📄 Hardcoded json files. Mag perfect en is minder werk!
- 🗄️ Database verbinden met prisma orm bv. API schrijven is niet nodig aangezien Next.js server side rendering heeft en form actions. 

### 📜 Certificates
Hmtl template om te zetten naar pdf met enkele variabelen zoals naam, periode, uitgevoerde projecten en events...

**Verantwoordelijken:**

### 📅 Events sectie 
Simpele lijst van events met toekomst / verleden. 
Naam, datum, locatie, beschrijving, ?foto, verslag...

**Verantwoordelijken:**

### 🔄 Rooster vernieuwen
Google Calendar gebruiken we niet meer, dus gebruik een calender component om ons teams rooster te tonen

**Verantwoordelijken:**

### 📈 Organigram (dit jaar en vorige jaren)
Npm package gebruiken om een organigram te maken

**Verantwoordelijken:**
