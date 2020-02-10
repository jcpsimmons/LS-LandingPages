# LS-LandingPages

Living Spaces landing page code repository

## Structure

New landing pages are kept root-level in the repo in their own folder. Folder titling should be formatted as such `yy-mm-dd_EVENTNAME`

Once landing pages are out of support, they are moved to the `old/` directory. It's good to keep these since certain design elements repeat yearly and code can be reused.

## Dev Tools

Currently working on a local server that injects HTML into a Livingspaces site container (so CSS is inherited from the site). The script works with `npm run server` but is hardcoded to a test template. Next steps will be to have the command take a dynamic path, or get the current path and inject that HTML into the template.
