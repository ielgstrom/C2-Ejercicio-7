const equiposMayoresEdad = (equipos, edadMinima) => {
  const equiposMayorDeCiertaEdad = equipos.filter(
    ({
      asignado: {
        empleado: { edad },
      },
    }) => edad > edadMinima
  );
  return equiposMayorDeCiertaEdad;
};

const equiposProvincia = (equipos, provinciaGeneral) => {
  const equiposDeProvincias = equipos.filter(
    ({ asignado: { provincia } }) =>
      provinciaGeneral === provincia.toLowerCase()
  );
  return equiposDeProvincias;
};

const provincias = (equipos) =>
  equipos
    .map(({ asignado: { provincia } }) => provincia)
    .filter(
      (provincia, index, provincias) => provincias.indexOf(provincia) === index
    );

const puestos = (equipos) =>
  equipos.map(
    ({
      asignado: {
        empleado: { puesto },
      },
    }) => puesto
  );

const edadMedia = (equipos) =>
  equipos.reduce(
    (
      totalEdad,
      {
        asignado: {
          empleado: { edad },
        },
      },
      i,
      empleados
    ) => totalEdad + edad / empleados.length,
    0
  );

const equiposPorEdad = (equipos) =>
  equipos.sort(
    (equiposA, equiposB) =>
      equiposA.asignado.empleado.edad - equiposB.asignado.empleado.edad
  );


const resumenEquipos = (equipos) =>
  equipos
    .map(
      ({
        id,
      }) => id,
  .

    ({
        asignado: { poblacion },
      }) => poblacion,


        ({
          asignado: { provincia },
        }) => provincia,
  );

/*
const equiposTipo = (equipos, especifico) =>
equipos.filter(
  ({ equiposTipo => { especifico === tipo }, }) => equiposTipo,
); 3
 */
