# Increment Environment Variable

This is a GitHub Action that increments an environment variable.

## Usage

```YAML 
- name: Increment Environment Variable
    uses: evanallen13/Increment-Environment-Variable@v1
    with:
        Name: "Name for the variable to increment"
        EnvironmentName: "Environment Name"
        RepoId: ${{ github.repository_id }}
        Token: ${{ secrets.PAT_TOKEN }}
```

## Inputs
### Required
- `Name`: Name for the variable to increment
- `EnvironmentName`: Environment Name
- `RepoId`: Repository ID can be found using  ${{ github.repository_id }}
- `Token`: Personal Access Token (PAT)