export const createProject = (project) => {
  return (dispatch, getState,{ getFirestore, getFirebase }) => {
    // make async call to database(firestore)
   const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstName : "Anita",
      authorLastName : "Patil",
      authorId : "23101991",
      createdAt: new Date()
    }).then(()=>{
      dispatch({ type: 'CREATE_PROJECT', project });
    }).catch((err)=>{
      dispatch({ type: 'CREATE_PROJECT_ERROR', err });
    })   
  }
};