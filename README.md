# Winnipeg Police Cause Harm Ghost theme

Created by @FarfamaH for [winnipegpolicecauseharm.org](https://winnipegpolicecauseharm.org).

## Deploying the theme

A push to the `production` branch will deploy the theme to the site.

## Preview deployment workflows

For ease of review, a preview deployment is created for every pull request on this repository. It’s forked from the base Heroku application [`ghost-theme-sandbox`](https://ghost-theme-sandbox.herokuapp.com/) with an overridden theme from the content of the PR. When the preview workflow has completed, it adds a check with a link to the deployment.

Since `data/redirects.json` and `settings/routes.yaml` don’t persist on Heroku’s ephemeral filesystem, you can add overrides to `.content-overrides` to have them pushed to the Heroku preview application, in case that’s helpful for exercising the PR in the preview environment. For instance, `.content-overrides/settings/routes.yaml` will be placed in the proper directory before the workflow pushes to Heroku.

Closing the PR will destroy the Heroku application.

Future improvement: forking the actual deployed site instead of a sandbox base so theme changes can be inspected with more-representative content.
