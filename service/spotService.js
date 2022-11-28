export default (spotRepository) => {
  const getList = async () => {
    const spots = await spotRepository.findAll();
    return spots;
  };

  return { getList };
};
