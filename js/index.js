const equiposMayoresEdad = equipo.filter(
  (
    {
      asignado: {
        empleado: { edad },
      },
    },
    edadMinima
  ) => edad > edadMinima
);

const equiposProvincia = equipos.filter(
  (equipo, provincia) => equipo.asignado.provincia === provincia
);

const provincias = equipos.filter((equipo) => equipo.asignado.provincia);

const puestos = equipos.filter((equipo) => equipo.asignado.empleado.puesto);

const edadMedia = equipos.reduce(
  (
    acumulador,
    {
      equipo: {
        asignado: {
          empleado: { edad },
        },
      },
    }
  ) => acumulador + edad / equipos.length,
  0
);
