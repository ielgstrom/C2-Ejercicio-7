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
