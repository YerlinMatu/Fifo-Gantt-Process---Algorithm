'use strict';

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Proceso = function Proceso(nombre, rafaga, prioridad, llegada) {
  _classCallCheck(this, Proceso);

  this.nombre = nombre.length != 0 ? nombre : "Anonimo ".concat(cont++);
  this.rafaga = +rafaga;
  this.prio = +prioridad;
  this.llegada = +llegada;
}; // end objet Process.
// count for name objet whitout name.

var cont = 0;
var FIFO = []; // Storage of objets process.
var DataGantt = [];
// Query dom_value.
function dom_value($id) {
  return document.getElementById($id).value;
}

// placeholder on inputs.
var question = ['Nombre de proceso', 'Tiempo Rafaga', 'Prioridad', 'Tiempo Llegada'];
// Send Data to storage fifo.
var EnviarDatos = function EnviarDatos() {
  var n = dom_value('nombre'),
      r = dom_value('rafaga'),
      p = dom_value('prio'),
      l = dom_value('llegada'),
      Process = new Proceso(n, r, p, l);
  FIFO.push(Process);
  console.table(FIFO);
  /*   let box = document.getElementById('box');
     ReactDOM.render(<Tabla datos={ FIFO }/>, box);  */
  BorrarDatos();
};
// Delete inputs
var BorrarDatos = function BorrarDatos() {
  return document.querySelector('form').reset();
};
var VerTabla = function VerTabla() {
  ReactDOM.render(React.createElement(Tabla, { datos: FIFO }), document.getElementById('box'));
};
function Gantt() {
  var arr = [];
  FIFO.map(function (x) {
    var objetoTemp = {
      nombre: x.nombre,
      llegada: Number(x.llegada)
    };

    arr.push(objetoTemp);
  });
  // Sorting in action.
  DataGantt = arr.slice(0);
  DataGantt = DataGantt.sort(function (a, b) {
    return a.llegada - b.llegada;
  });
  console.table(DataGantt);
  ReactDOM.render(React.createElement(GanttView, { datos: DataGantt }), document.getElementById('box'));
}
// Component form.

var FormTag = function (_React$Component) {
  _inherits(FormTag, _React$Component);

  function FormTag() {
    _classCallCheck(this, FormTag);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  FormTag.prototype.render = function render() {
    return React.createElement(
      'form',
      { id: 'form', onsubmit: 'return false' },
      React.createElement(
        'div',
        { className: 'form' },
        React.createElement(
          'h1',
          { className: 'title' },
          this.props.title
        ),
        React.createElement('input', { id: 'nombre', type: 'text', placeholder: question[0] }),
        React.createElement('input', { id: 'rafaga', type: 'number', placeholder: question[1] }),
        React.createElement('input', { id: 'prio', type: 'number', placeholder: question[2], min: '0' }),
        React.createElement('input', { id: 'llegada', type: 'number', placeholder: question[3], min: '0' }),
        React.createElement(
          'button',
          { type: 'button', className: 'agg', onClick: EnviarDatos },
          'Agregar Proceso ',
          React.createElement(
            'span',
            null,
            ' +'
          )
        ),
        React.createElement(
          'button',
          { type: 'button', className: 'btnpanel', onClick: VerTabla },
          'Ver Procesos'
        ),
        React.createElement(
          'button',
          { type: 'button', className: 'gantt', onClick: Gantt },
          'Ver Diagrama de gantt'
        )
      )
    );
  };

  return FormTag;
}(React.Component);

;
// Rendering form:
ReactDOM.render(React.createElement(FormTag, { title: 'ALGORITMO FIFO' }), document.getElementById('form'));

var Tabla = function (_React$Component2) {
  _inherits(Tabla, _React$Component2);

  function Tabla() {
    _classCallCheck(this, Tabla);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  Tabla.prototype.render = function render() {
    var viewdata = this.props.datos.map(function (process) {
      return React.createElement(
        'tr',
        null,
        React.createElement(
          'th',
          null,
          process.nombre
        ),
        React.createElement(
          'th',
          null,
          process.rafaga
        ),
        React.createElement(
          'th',
          null,
          process.prio
        ),
        React.createElement(
          'th',
          null,
          process.llegada
        )
      );
    });
    return React.createElement(
      'div',
      null,
      React.createElement(
        'table',
        null,
        React.createElement(
          'thead',
          null,
          React.createElement(
            'tr',
            null,
            React.createElement(
              'th',
              null,
              'PROCESO'
            ),
            React.createElement(
              'th',
              null,
              'TIEMPO DE RAFAGA'
            ),
            React.createElement(
              'th',
              null,
              'PRIORIDA'
            ),
            React.createElement(
              'th',
              null,
              'TIEMPO DE LLEGADA MS'
            )
          )
        ),
        React.createElement(
          'tbody',
          null,
          viewdata
        )
      )
    );
  };

  return Tabla;
}(React.Component);

var GanttView = function (_React$Component3) {
  _inherits(GanttView, _React$Component3);

  function GanttView() {
    _classCallCheck(this, GanttView);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  GanttView.prototype.render = function render() {
    var viewgantt = this.props.datos.map(function (process) {
      return React.createElement(
        'tr',
        null,
        React.createElement(
          'th',
          null,
          process.nombre
        ),
        React.createElement(
          'th',
          null,
          process.llegada
        )
      );
    });
    return React.createElement(
      'div',
      null,
      React.createElement(
        'table',
        null,
        React.createElement(
          'thead',
          null,
          React.createElement(
            'tr',
            null,
            React.createElement(
              'th',
              null,
              'PROCESO'
            ),
            React.createElement(
              'th',
              null,
              'TIEMPO DE LLEGADA'
            )
          )
        ),
        React.createElement(
          'tbody',
          null,
          viewgantt
        )
      )
    );
  };

  return GanttView;
}(React.Component);