/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    res: NextApiResponse,
    req: NextApiRequest,
    ) {
        try {
            // revalidate the page
            await res.revalidate('/'); // '/'는 revalidate할 페이지의 경로
            return res.json({ revalidated: true });
        }
        catch (err) {
            // If there was an error, Next.js will continue to show the last
            // successfully generated page.
            return res.status(500).send('Error revalidating');
        }
    }