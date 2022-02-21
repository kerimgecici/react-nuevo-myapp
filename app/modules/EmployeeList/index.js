import React, { useState } from "react";
import styles from "./EmployeeList.module.scss";
import { Typography, Avatar, ListItemAvatar, ListItemText, Divider, ListItem, List } from '@mui/material';
import { selectFilteredEmployeeList } from "../../slices/emloyeesSlice";
import { useSelector } from 'react-redux'
import InfiniteScroll from "react-infinite-scroll-component";

const EmployeeList = ({ className }) => {

    const [pageCount, setPageCount] = useState(10)

    const filteredk = useSelector(selectFilteredEmployeeList());

    const getMoreData = () => {
        if (filteredk.length < pageCount) {
            setTimeout(() => {
                setPageCount(filteredk.length)
            }, 500)
        } else {
            setTimeout(() => {
                setPageCount(pageCount + 10)
            }, 500)
        }
    }

    return (
        <div className={className}>
            <div className={styles.EmployeeListWrapper}>
                <div className={styles.EmployeeList}>
                    <InfiniteScroll
                        dataLength={pageCount}
                        next={getMoreData}
                        hasMore={true}
                        loader={filteredk.length > pageCount && <h4>Loading...</h4>}
                    >
                        {filteredk.length > 0 ? <List sx={{ width: '100%', bgcolor: 'background.paper' }} className={styles.List}>

                            {filteredk.map((list, index) => {
                                if (index < pageCount) {
                                    return <div key={`d-${index}`}>
                                        <ListItem className={styles.ListItem} alignItems="flex-start">
                                            <ListItemAvatar >
                                                <Avatar alt={`a-${index}`} src={`https://i.pravatar.cc/50?${index}`} className={styles.Avatar} />
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={list.name}
                                                secondary={
                                                    <>
                                                        <Typography
                                                            sx={{ display: 'inline' }}
                                                            component="span"
                                                            variant="body2"
                                                            color="text.primary"
                                                        >
                                                            {list.company}
                                                        </Typography>
                                                        <span className={styles.JobDescription}>{list.jobdescription}</span>
                                                    </>
                                                }
                                            />
                                        </ListItem>

                                    </div>
                                }

                            }
                            )}
                        </List>

                            :
                            <p>Not Found</p>
                        }
                    </InfiniteScroll>
                </div>
            </div>
        </div>
    );
};

export default EmployeeList;


