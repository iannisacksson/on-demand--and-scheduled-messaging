import handlebars from 'handlebars';
import fs from 'fs';

class HandlebarsMailTemplate {
  async parse({ file, variables }) {
    const templateFileContent = await fs.promises.readFile(file, {
      encoding: 'utf-8',
    });

    const parseTemplate = handlebars.compile(templateFileContent);

    return parseTemplate(variables);
  }
}

export default HandlebarsMailTemplate;
