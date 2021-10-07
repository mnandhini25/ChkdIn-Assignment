import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import {editNote} from '../redux/actions/notes';
import EditIcon from '@mui/icons-material/Edit';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

// import { Container } from './styles';

function NoteListComponent() {
    const dispatch = useDispatch();

  const appState = useSelector((state) => state.notes);
  console.log("app state:", appState);

  const editCard = (card, type) => {
    console.log("card ::", card);
    let tempList = [...appState.noteList];
    tempList.map((tempCard) => {
        if(card.id === tempCard.id){
            tempCard[type] = !tempCard[type] 
        }
    })
    dispatch(editNote(tempList));
  };

  const addCard = (category) =>{
    let tempList = [...appState.noteList, ...[{
        features: "",
        desc: "",
        category: category.name,
        id:Math.round(new Date().getTime()/10000),
        catId:category.catId,
        isEditHeader: true,
        isContentEdit: true
    }]];
    dispatch(editNote(tempList))
  }

  const deleteCard = (card) =>{
      let tempList = [...appState.noteList];
      const filterList = tempList.filter((tempCard) => {
          return tempCard.id !== card.id
      })
      console.log('temp list:', filterList)
      dispatch(editNote(filterList))
  }

  const handleChange = (e,card) =>{
      console.log('event :',e, card);
      let tempList = [...appState.noteList];
    tempList.map((tempCard) => {
        if(card.id === tempCard.id){
            tempCard[e.target.id] = e.target.value
        }
    })
    dispatch(editNote(tempList));
  }
  return (
    <div className="container">
      {appState?.categoryList?.length
        ? appState.categoryList.map((category, catIndex) => {
            return (
              <Accordion key={catIndex} defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{category.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {appState.noteList.map((note, noteIndex) => {
                    if (note.catId === category.catId) {
                      return (
                        <Card
                          sx={{
                            maxWidth: 200,
                            minWidth: 150,
                            margin: 2,
                            float: "left",
                          }}
                          key={note.id}
                        >
                          {note.isEditHeader ? (
                            <CardContent>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                <input
                                  onBlur={()=>{editCard(note, "isEditHeader")}}
                                  onChange={(e)=>{handleChange(e, note)}}
                                  type="text"
                                  id="features"
                                  value={note.features}
                                  style={{
                                    width: "60%",
                                    border: "none",
                                    outline: "none",
                                  }}
                                />
                                
                                
                                {/* <IconButton aria-label="settings">
                                  <DeleteIcon />
                                </IconButton> */}
                              </Typography>
                            </CardContent>
                          ) : (
                            <CardHeader
                            
                              action={
                                <IconButton aria-label="settings">
                                  <DeleteIcon  onClick={()=>{deleteCard(note)}}/>
                                 
                                  <EditIcon onClick={()=>{editCard(note, "isEditHeader")}}/>
                                
                                </IconButton>
                              }
                              title={note.features}
                            />
                          )}

                          <CardContent >
                            {note.isContentEdit ? (
                              <input type="text" value={note.desc}
                                onBlur={()=>{editCard(note, "isContentEdit")}}
                                onChange={(e)=>{handleChange(e, note)}}
                               id="desc" />
                            ) : (
                              <Typography
                                variant="body2"
                                color="text.secondary"
                                onClick={()=>{editCard(note, "isContentEdit")}}
                              >
                                {note.desc}
                              </Typography>
                            )}
                          </CardContent>
                        </Card>
                      );
                    }
                  })}
                  <div>
                    <IconButton aria-label="settings">
                      <AddIcon onClick={()=>{addCard(category)}}/>
                    </IconButton>
                  </div>
                </AccordionDetails>
              </Accordion>
            );
          })
        : ""}
    </div>
  );
}

export default NoteListComponent;
