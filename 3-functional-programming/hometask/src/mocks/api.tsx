import accounts from './accounts.json';
import users from "./users.json";
import images from "./images.json";
import { Account, Image, User} from '../../types'

const getImages = (): Promise<Image[]> => new Promise(resolve => resolve(images.data));
const getUsers = (): Promise<User[]> => new Promise((resolve) => resolve(users.data));
const getAccounts = (): Promise<Account[]> => new Promise((resolve) => resolve(accounts.data));

export { getImages, getUsers, getAccounts };
