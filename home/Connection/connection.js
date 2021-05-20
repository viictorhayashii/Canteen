

export function OpenConnection()
{
    return openDatabase("canteen", "1,0", "Canteen", 2 * 1024 * 1024);
}
