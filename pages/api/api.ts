// fetch data from https://ws.smn.gob.ar/map_items/weather and then return weather.tempDesc from the response at index a
export async function getTemp(city: string): Promise<string> {
    const response = await fetch('https://ws.smn.gob.ar/map_items/weather');
    const data = await response.json();
    const index = data.findIndex((x: any) => x.name === city);
    return data[index].name + '\n' + data[index].weather.tempDesc;
}
