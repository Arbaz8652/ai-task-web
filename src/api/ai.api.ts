import axios from 'axios';
import { BASE_URL } from '../types/constants';

export async function sendAiCommand(message: string) {
  const res = await axios.post(
    `${BASE_URL}/api/ai/command`,
    { message },
  );
  return res.data;
}
