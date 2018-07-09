import request from '../utils/request';
import {format} from '../utils/tool';

export function getLogin (value) {
  console.log (format (value));
  return request (`/api/login?${format (value)}`);
}
