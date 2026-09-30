import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
const AddTaskForm = (props) => {

    return (
        <Box
            component="form"
            sx={{
                '& .MuiOutlinedInput-root': { m: 1, width: '30ch' },
            }}
            onSubmit={props.submit}
        >
            <div>
                <TextField
                    required
                    id="outlined-required"
                    name="title"
                    label="Task Title"
                    slotProps={{ inputLabel: { shrink: true } }}
                    onChange={(event) => props.change(event)}
                />
            </div>

            <div>
                <TextField
                    required
                    name="deadline"
                    label="Deadline"
                    slotProps={{ inputLabel: { shrink: true } }}
                    type="date"
                    onChange={(event) => props.change(event)}
                />
            </div>

            <div>
                <TextField
                    name="description"
                    id="outlined-multiline-static"
                    label="Task Details"
                    slotProps={{ inputLabel: { shrink: true } }}
                    multiline
                    rows={4}
                    onChange={(event) => props.change(event)}
                />
            </div>

            <div>
                <Autocomplete
                    options={["Low", "Medium", "High"]}
                    defaultValue="Low"
                    onChange={(event, value) => {
                        props.change({
                            target: {
                                name: "priority",
                                value: value
                            }
                        });
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Priority"
                        />
                    )}
                />
            </div>

            <div>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{
                        m: 1,
                        p: 1,
                        width: '95%'
                    }}
                >
                    Add Task
                </Button>
            </div>
        </Box>

    )
};

export default AddTaskForm;
