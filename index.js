import { getInput, setFailed } from "@actions/core";
import { context, getOctokit } from "@actions/github";

const repoId= getInput("RepoId");
const environmentName = getInput("EnvironmentName");
const name = getInput("Name");

getEnvironmentVariable = async (environmentName = this.environmentName, repoId = this.repoId, repoName=this.repoName, name=this.name, ownerName=this.ownerName) => {

    let url = `GET /repositories/${repoId}/environments/${environmentName}/variables/${name}`

    return this.octokit.request(url, {
        owner: ownerName,
        repo: repoName,
        name: name
    })
}
