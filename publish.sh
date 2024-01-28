npm run build
cd dist/ || exit
git init
git add .
git remote add origin git@github.com:123R3N321/123R3N321.github.io.git
git commit -m "Initial commit"
git branch -M main
git push -u origin main
