
import { Button, Card, CardContent, Typography } from "@mui/material";

export default function Salam() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-error-500 space-y-8 p-8">
      <Typography variant="h4" className="font-bold text-gray-800">
        MUI + Tailwind Demo
      </Typography>

      <Card className="shadow-xl w-80 rounded-2xl border border-gray-200">
        <CardContent className="text-center space-y-4">
          <Typography variant="h6" className="text-gray-700 font-semibold">
            I'm Batman 🦇
          </Typography>
          <Typography variant="body2" className="text-gray-500">
            tailwindcss and mui come together
          </Typography>

          <div className="flex justify-center space-x-3 pt-2">
            <Button
              variant="contained"
              color="primary"
              className="!bg-primary-600 hover:!bg-red-400 !rounded-xl"
            >
              Click
            </Button>
       
            <Button
              variant="outlined"
              color="secondary"
              className="!border-purple-500 !text-purple-600 hover:!bg-purple-50 !rounded-xl"
            >
              Another one
            </Button>
          </div>
        </CardContent>
      </Card>

      <footer className="text-sm text-gray-400 mt-6">
        <span className="font-medium text-gray-500">AmirK</span>
      </footer>
    </div>
  );
}
