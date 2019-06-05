# Buffalo Cool Roof Project

The grand prize winner of the 2019 Buffalo, NY's Civic Innovation EcoChallenge!

See http://ecochallenge.buffalo-coders.org/ for production deployment.

## Requirements

 * [Hugo](https://gohugo.io/) - a static site generator
 * [awscli](https://aws.amazon.com/cli/) - Amazon Web Services (AWS) Command Line Interface tools (optional)

## Building for Development

```shell
hugo serve --buildDrafts --buildExpired --buildFuture --cleanDestinationDir --forceSyncStatic --minify --path-warnings --watch
```

Then open a web browser to [http://localhost:1313](http://localhost:1313) to view results. You can make changes to the web resources and your web browser should automatically refresh.

## Building for Production

```shell
hugo --buildDrafts --buildExpired --buildFuture --cleanDestinationDir --forceSyncStatic --minify --path-warnings
```

## Deploying to Production (AWS)

Currently, production deployment is using [Amazon Web Services](https://aws.amazon.com/). It uses [Simple Storage Server (S3)'s](https://aws.amazon.com/s3/) static website hosting feature. The cost is about $1 per month for storage space and network transfer.

First, we have to create some AWS resources to host the website. We'll use `BUCKET_NAME` in our examples, but you should replace that with your own bucket name.

```shell
aws s3api create-bucket --acl public-read --bucket BUCKET_NAME

aws s3 website s3://BUCKET_NAME/ --index-document index.html --error-document error.html
```

Now that the setup is complete, we can produce the website and sync it to the bucket.

First, follow the **Building for Production** section above. The produced website will be in the `public` folder.

Next, sync the produced `public` folder to your production S3 bucket, the `--delete` option just removes files in the bucket that aren't part of our production site, this is OK.

```shell
aws s3 sync public s3://BUCKET_NAME --delete
```

Congratulations, you're done!
