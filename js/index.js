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
