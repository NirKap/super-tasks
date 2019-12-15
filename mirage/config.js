export default function() {
  this.namespace = '/api';

  this.get('/tasks', function() {
    return {
      data: [{
        type: 'task',
        id: '1',
        attributes: {
          id: '1',
          text: 'task A',
          isdone: false,
        }
      }, {
        type: 'task',
        id: '2',
        attributes: {
          id: '2',
          text: 'task B',
          isdone: false,
        }
      }, {
        type: 'task',
        id: '3',
        attributes: {
          id: '3',
          text: 'task C',
          isdone: true,
        }
      }]
    };
  });
}