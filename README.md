# EF Security Checklist

This is the source code for the website, which displays the checklist data interactively, available at: https://ef-security-checklist.vercel.app/ 
The checklist is curated, so that you can expect a relevant in 2025 and realistic to perform advice. If not: reach out using the [email group](mailto:security-checklist@ethereum.org) with your concerns and feedback.

## License
EF Security Checklist is based on the code from the 'web' folder © Alicia Sykes - https://github.com/Lissy93/personal-security-checklist/ released by MIT license, and the checklist text data © Alicia Sykes, released by Creative Commons Attribution 4.0 International Public License ("CC BY 4.0").
Code and checklist text data contains work by multiple contributors, listed in the source repository. The updated version in this repository retains same licensing status.

## Proposing Updates
Please note that this checklist is curated, so **no marketing PRs with links to security tools would be accepted**.

If you wish to propose content changes, the only file you need to edit is `public/personal-security-checklist.yml`.

## Deployment
Do `git push`, then `npm run deploy` which pulls data from Git, verify your changes in dev environment, then do `npm run deploy.prod` to deploy it in your Vercel account. For other build, development and deploy commands, see the `package.json`.

