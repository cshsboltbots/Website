# Bolt Bots Website
A website for team 2344A (Bolt Bots) created with TailwindCSS and DaisyUI to replace the current Google Sites. Located at www.cshsboltbots.org
## Steps
1. Install the npm packages
```npm install -D tailwindcss && npm i daisyui```
2. Clone this repository and Cd into it
```git clone "https://github.com/cshsboltbots/Website.git```
3. Start developing and run it
```npx tailwindcss -i input.css -o /public/style/style.css --watch```
4. Open another terminal and run
```cd public && python -m http.server 80```
5. Visit it
```http://ip```


## Build Command for Deployment
```npx tailwindcss -i input.css -o /public/style/style.css --minify```

# License
MIT License
