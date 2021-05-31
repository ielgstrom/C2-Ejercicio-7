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

const equiposPorTipo = (equipos) => {
  const equiposPorTipo = [];
  const tiposEquipo = equipos
    .map(({ tipo }) => tipo)
    .filter((tipo, index, tipos) => tipos.indexOf(tipo) === index);
  for (const tipoEquipo of tiposEquipo) {
    const equiposDeUnTipo = { tipo: "", equipos: [] };
    for (const equipo of equipos) {
      if (equipo.tipo === tipoEquipo) {
        equiposDeUnTipo.equipos.push(equipo);
      }
    }
    equiposDeUnTipo.tipo = tipoEquipo;
    equiposPorTipo.push(equiposDeUnTipo);
  }
  return equiposPorTipo;
};
const equiposTipoLocalidad = (equipos, tipo1, localidad1) =>
  equipos.filter(
    ((team) => team.tipo.toLowerCase() === tipo1.toLowerCase()) &&
      ((team) =>
        team.asignado.poblacion.toLowerCase() === localidad1.toLowerCase())
  );

const resumenEquipos = (equipos) =>
  equipos.map(
    ({ id }) => id,
    ({ asignado: { poblacion } }) => poblacion,
    ({ asignado: { provincia } }) => provincia
  );

