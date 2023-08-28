import { useUser } from "./UserContext";

const Content = () => {
  const { data, loading } = useUser();
  if (loading) return <div>Carregando...</div>;
  if (!data) return null;
  return (
    <div>
      <h3>{data.idade} anos</h3>
      <h3>{data.aulas} aulas assistidas</h3>
      <h3>{data.cursos} cursos completados</h3>
      <p>Preferências:</p>
      <ul>
        <li>Playback rate: {data.preferencias.playback}</li>
        <li>Volume do vídeo: {data.preferencias.volume}</li>
        <li>Qualidade do vídeo: {data.preferencias.volume}</li>
      </ul>
    </div>
  );
};

export default Content;
