import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

// These function names should be really named like this
export async function GET(request, { params }) {
  const { cabinId } = params;
  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
    return Response.json({ cabin, bookedDates });
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Cabin not found", error: `${error}` });
  }
}

// export async function POST() {}

// export async function PUT() {}

// export async function PATCH() {}

// export async function DELETE() {}
