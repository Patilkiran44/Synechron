import  {SAVE_CREDENTIALS}  from './constant';
export function saveCredentials(data) {
return {
type: SAVE_CREDENTIALS,
payload: data
}
}

