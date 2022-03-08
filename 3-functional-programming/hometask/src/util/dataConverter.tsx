import _ from 'lodash';
import { Account, User, Image, Payment } from "../../types";
import { Row } from '../components'

const getLastPayment = (payments: Payment[]) => {
    const paymentsArr = _.map(payments,({totalSum, date})=> ({totalSum, date: new Date(date)}))
    return paymentsArr.length > 0 ? _.orderBy(paymentsArr, ['date'], ['desc'])[0].totalSum : 0;
}

export const dataConverter = (users: User[], accounts: Account[], images: Image[]): Row[] => {
    // convert data
    let rows: Row[] = [];
    users.forEach(user => {
        const userAccounts = _.filter(accounts, ['userID', user.userID])
            .map(account => ({ posts: account.posts, lastPayments: getLastPayment(account.payments) }));
        const userImages = _.filter(images, ['userID', user.userID])
            .map((image) => ({ avatar: image.url }));
        const newRow = Object.assign({}, ...userAccounts, ...userImages, user)
        rows.push(newRow);
    });
    return rows;
}
