import openai

# Set your API key
openai.api_key = "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"

# Optionally, set your organization ID if you're working within an organization
openai.organization = "org-67hXQod86lxQlvXTGjzKTrWW"

# List all available models
models = openai.Model.list()

# Print out the model IDs
for model in models['data']:
    print(model['id'])
