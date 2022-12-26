import * as core from '@actions/core'
import * as github from '@actions/github'

function getErrorMessage(error: any): string {
    if (error instanceof Error) {
        return error.message
    } else {
        return error
    }
}

async function run(): Promise<void> {
    try {
        const text = core.getInput('text', {required: true})
        const context = `${github.context.repo.owner}/${github.context.repo.repo}`
        const mode = 'gfm'

        const response = await github
            .getOctokit(process.env.GITHUB_TOKEN!)
            .rest.markdown.render({text, context, mode})

        core.setOutput('html', response.data)
    } catch (error) {
        core.setFailed(getErrorMessage(error))
    }
}

run()
