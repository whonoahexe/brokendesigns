// notion
import { Client } from '@notionhq/client';

export default function api(req, res) {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const response = notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: 'URL',
      rich_text: {
        contains: `/work/${params.work}`,
      },
    },
  });

  console.log(response);

  res.status(200).json(response);
}