import { WorkflowColumn } from './workflowColumn';
import { Card, CardContent, Grid } from '@mui/material';
import { styles } from '../styles';


const workflowColumns = [
    {
        name: "In Progress",
        cards: [
            {
                name: 1
            },
            {
                name: 2
            },
            {
                name: 3
            },
            {
                name: 4
            },
            {
                name: 5
            }
        ]
    },
    {
        name: "What's Next",
        cards: [
            {
                name: 1
            },
            {
                name: 2
            },
            {
                name: 3
            },
            {
                name: 4
            },
            {
                name: 5
            }
        ]
    },
    {
        name: "Experience",
        cards: [
            {
                name: 1
            },
            {
                name: 2
            },
            {
                name: 3
            },
            {
                name: 4
            },
            {
                name: 5
            }
        ]
    },
    {
        name: "Interests",
        cards: [
            {
                name: 1
            },
            {
                name: 2
            },
            {
                name: 3
            },
            {
                name: 4
            },
            {
                name: 5
            }
        ]
    },
    {
        name: "Completed",
        cards: [
            {
                name: 1
            },
            {
                name: 2
            },
            {
                name: 3
            },
            {
                name: 4
            },
            {
                name: 5
            }
        ]
    }
]

export const Workflow = () => {
    return (
        <Grid
            id="workflowContainer"
            container
            direction="row"
            justifyContent="center"
            style={{...styles.workflowContainerStyles}}>
                {
                    workflowColumns.map((columnData, i) =>{
                        return (
                            <WorkflowColumn key={i} columnData={columnData}/>
                        )
                    })
                }
        </Grid>
    )
}