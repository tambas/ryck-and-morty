# Rick & Morty TV

```shell script
for f in *.jpg; do                           
  convert $f -resize 400 -quality 100% "${f%.jpg}-min.jpg"
done
```

```shell script
docker build -t gcr.io/spheric-backup-272401/rickandmorty .
docker push gcr.io/spheric-backup-272401/rickandmorty
docker stop rickandmorty && docker rm rickandmorty
docker run --name rickandmorty -d --restart=always -p 80:80 gcr.io/spheric-backup-272401/rickandmorty
```