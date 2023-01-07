# Github Markdown to HTML

![Build](https://github.com/repolevedavaj/github-markdown-to-html/workflows/Build/badge.svg)

Renders a Markdown document in HTML using the Github REST API. The API is called with the current repository as `context` and `gfm` as `mode` to resolve references to PRs and issues. See [Github REST API](https://docs.github.com/en/rest/markdown?apiVersion=2022-11-28#render-a-markdown-document) for more details.

## Inputs

## `text`

The Markdown text to render in HTML.

## Outputs

## `html`

The rendered in HTML.

## Example usage

```shell
uses: repolevedavaj/github-markdown-to-html@v1
with:
  text: ${{ steps.release.outputs.body }}
env:
  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```