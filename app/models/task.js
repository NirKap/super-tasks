import DS from 'ember-data';

export default DS.Model.extend({
    ID: DS.attr('number'),
    text: DS.attr(),
    isdone: DS.attr('boolean'),
    newTask(){
        store.createRecord('task', {
            ID: '22',
            text: '',
            isDone: 'boolean',
        });
    },

});

// export default DS.Store.extend({


// });
    