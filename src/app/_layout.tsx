import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack screenOptions={{ headerTransparent: false }}> //looked up
            <Stack.Screen name="index" options={{ title: "Movies" }} />
            <Stack.Screen name="MovieDetails" options={{ title: "ReleaseDate" }} />
        </Stack>
    );
}
