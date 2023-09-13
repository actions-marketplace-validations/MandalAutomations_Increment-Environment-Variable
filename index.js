import { getInput, setFailed } from "@actions/core";
import { context, getOctokit } from "@actions/github";

const repoId= getInput("RepoId");
const environmentName = getInput("EnvironmentName");
const name = getInput("Name");
const ownerName = getInput("OwnerName");
const repoName = getInput("RepoName");
const token = getInput("Token");

const octokit = getOctokit();

const getEnvironmentVariable = async () => {

    let url = `GET /repositories/${repoId}/environments/${environmentName}/variables/${name}`

    return this.octokit.request(url, {
        owner: ownerName,
        repo: repoName,
        name: name
    })
}

const run = async () => {
    const environmentVariable = await getEnvironmentVariable();
    console.log(environmentVariable)
}

run();
