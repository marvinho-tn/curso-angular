import { isWithinInterval } from "date-fns";
import { IUser } from "../interfaces/user/user.interface";
import { IFilterOptions } from "../interfaces/filter-options.interface";

const filterUserListByStatus = (status: boolean | undefined, usersList: IUser[]): IUser[] => {
    const STATUS_NOT_TYPPED = status === undefined;

    if (STATUS_NOT_TYPPED) {
        return usersList;
    }

    const filteredList = usersList.filter((user: IUser) => user.ativo === status);

    return filteredList;
}

const filterUsersListByDate = (startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] => {
    const DATES_NOT_SELECTED = startDate === undefined || endDate === undefined;

    if (DATES_NOT_SELECTED) {
        return usersList;
    }

    const checkDateInterval = (user: IUser) => isWithinInterval(user.dataCadastro, {
        start: startDate,
        end: endDate
    });

    const filteredList = usersList.filter(checkDateInterval);

    return filteredList;
}

const filterUsersListByName = (name: string | undefined, usersList: IUser[]): IUser[] => {
    const NAME_NOT_TYPPED = name === undefined;

    if (NAME_NOT_TYPPED) {
        return usersList;
    }

    const filteredList = usersList.filter((user: IUser) => user.nome.toLocaleLowerCase().includes(name.toLocaleLowerCase()));

    return filteredList;
}

const filterUsersList = (filterOptions: IFilterOptions, usersList: IUser[]): IUser[] => {
    let filteredList: IUser[] = [];

    filteredList = filterUsersListByName(filterOptions.name, usersList);
    filteredList = filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);
    filteredList = filterUserListByStatus(filterOptions.status, filteredList);

    return filteredList;
}

export { filterUsersList };