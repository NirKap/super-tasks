import Component from '@ember/component';

export default Component.extend({
    actions: {
        deleteTask(taskID){
            store.findRecord('task', taskID).then(function (task) {
                task.destroyRecord()
                console.log('deletee')
            });     
        },
        newTask(){
            store.createRecord('task', {
                ID: '22',
                text: '',
                isDone: 'boolean',
            });     
        },
        updateTask(taskID,newText){
            store.findRecord('task', taskID).then(function (task) {
            var text = document.getElementById('teacher').val()
                task.set('text', newText)
            store.save()
            });
        },
        cngDone(taskID){
            store.findRecord('task', taskID).then(function (task) {
            var newDoneStatus = not(task.isDone)
                task.set('isDone', newDoneStatus)
            store.save()
             
            });
        },
    }
});
