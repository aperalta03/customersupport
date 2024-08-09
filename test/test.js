const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: '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',
  organization: 'org-67hXQod86lxQlvXTGjzKTrWW',
});

async function testModel() {
  try {
    const response = await openai.chat.completions.create({
      model: 'ft:gpt-4o-mini-2024-07-18:aperalta03:finance-advisor:9uMknHpy',
      messages: [{ role: 'user', content: 'Test prompt' }],
      max_tokens: 50,
    });
    console.log(response.choices[0].message.content.trim());
  } catch (error) {
    console.error('Error:', error);
  }
}

testModel();
