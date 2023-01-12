export async function load({ data }) {
    const response = await fetch('https://catfact.ninja/fact')
    const fact = await response.json();
    return fact;
}