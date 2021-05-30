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
