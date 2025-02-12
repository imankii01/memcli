
# **MemeCLI 📸 - AI-Powered Meme Generator for Your Terminal**  
🎉 **Generate memes instantly from your CLI!** Supports **AI-generated captions, trending templates, custom images, and multi-language support**.  

[![NPM Version](https://img.shields.io/npm/v/memecli?color=blue&style=flat-square)](https://www.npmjs.com/package/memecli)  
[![GitHub Repo](https://img.shields.io/github/stars/imankii01/memecli?style=social)](https://github.com/imankii01/memecli)  
[![MIT License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](./LICENSE)  

🚀 **MemeCLI** lets you create memes directly from the command line. No need to manually search, edit, or download images—just type a command and **get your meme instantly!**  

---

## **📦 Installation**  

### **Using NPX (No Installation Required)**
```sh
npx memecli "When you realize Monday is tomorrow"
```

### **Install Globally for Quick Access**
```sh
npm install -g memecli
```
Now, you can run:  
```sh
memecli "This is fine!"
```

---

## **💡 Features**
✅ **Instant Meme Generation** – Generate memes with one command!  
✅ **AI-Powered Captions** – Auto-generates funny meme text using AI.  
✅ **Trending Meme Templates** – Fetch the latest meme formats from **Imgflip & Reddit**.  
✅ **Supports Custom Images** – Use your own image to create memes.  
✅ **Multi-Language & Timezone Support** – Auto-detects user language for localized meme text.  
✅ **Works Offline** – Preloaded meme templates for **offline usage**.  
✅ **Fun Exit Messages** – Random jokes & funny comments after each command.  

---

## **🚀 Usage**  

### **1️⃣ Generate a Meme with Custom Text**
```sh
memecli "When you realize Monday is tomorrow"
```
📌 **Output:** Generates a random meme with your text and saves it as `meme.png`.  

---

### **2️⃣ Use a Specific Meme Template**
```sh
memecli "Deploying to production" --template "Drake"
```
📌 **Output:** Generates a **Drake meme** with the caption: *"Deploying to production"*.  

🔹 **Available Meme Templates:**  
To see a list of all available meme templates, run:  
```sh
memecli --list
```

---

### **3️⃣ Use Your Own Image**
```sh
memecli "When debugging works" --image "./funny.jpg"
```
📌 **Output:** Adds **"When debugging works"** text to `funny.jpg` and saves it.  

---

### **4️⃣ Auto-Generate a Caption**
```sh
memecli --auto-caption
```
📌 **Output:** Fetches a trending meme caption from Reddit & generates a meme.  

---

### **5️⃣ Save Meme with Custom File Name**
```sh
memecli "Bug fixing in production" --output "my_meme.png"
```
📌 **Output:** Saves meme as `my_meme.png` instead of the default `meme.png`.  

---

### **6️⃣ Fetch Trending Meme Templates**
```sh
memecli --fetch-trending
```
📌 **Output:** Fetches the **latest meme formats** from Imgflip & Reddit.  

---

## **🌍 Multi-Language Support**
MemeCLI auto-detects your system language and **adjusts meme captions** accordingly.  
Supported languages:  
- 🇺🇸 **English (en-US)**
- 🇪🇸 **Spanish (es-ES)**
- 🇫🇷 **French (fr-FR)**
- 🇩🇪 **German (de-DE)**
- 🇮🇳 **Hindi (hi-IN)**  

---

## **⚙️ Configuration**
MemeCLI allows users to customize settings by editing the `config.js` file.

📌 **Example `config.js` file:**  
```javascript
module.exports = {
  defaultOutputFile: "meme.png",
  fontSettings: {
    defaultFont: "Arial",
    defaultSize: 40,
    color: "white",
  },
  apiKeys: {
    imgflip: "your_imgflip_api_key",
  },
  memeSettings: {
    defaultTemplate: "Drake",
    allowCustomImages: true,
    fetchTrendingMemes: true,
  },
};
```

---

## **🛠 Dependencies**
MemeCLI uses the following NPM packages:  
✅ **axios** → Fetches meme templates & captions from APIs.  
✅ **canvas** → Handles text overlay on images.  
✅ **chalk** → Styles CLI output with colors.  
✅ **commander** → Parses command-line arguments.  
✅ **os-locale** → Detects system language for localization.  
✅ **sharp** → Optimizes image processing.  

📌 **Install all dependencies:**  
```sh
npm install axios canvas chalk commander os-locale sharp
```

---

## **🧪 Running Tests**
To verify that MemeCLI is working correctly, run:  
```sh
npm test
```
📌 This runs unit tests on **meme generation, API calls, and CLI commands**.  

---

## **📢 Contributing**
🚀 Love open-source? Want to improve MemeCLI? Feel free to contribute!  

✅ **Star the Repo** ⭐  
✅ **Fork & Submit PRs** 🔥  
✅ **Request Features & Report Bugs** 🐛  

🔗 **GitHub Repo:** [https://github.com/imankii01/memecli](https://github.com/imankii01/memecli)  

---

## **📜 License**
This project is licensed under the **MIT License**. See the full license **[here](./LICENSE)**.  

---

## **☕ Support the Developer**
If you love **MemeCLI**, consider buying me a coffee to support future development!  

[![Buy Me a Coffee](https://img.shields.io/badge/☕-Buy%20Me%20a%20Coffee-orange)](https://www.buymeacoffee.com/imankii01)  

---

### **🚀 Let’s Make Memes, Code, and Open Source More Fun!**  
💬 **Try MemeCLI today & let me know your thoughts!**  

📌 **Drop a comment below! What's your favorite meme template?** 🤔👇  

#NodeJS #OpenSource #MemeCLI #FunProjects #NPM #JavaScript #CLI #HackTheInternet 🚀🔥  
