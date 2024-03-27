<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Company;
use App\Models\Division;
use App\Models\Level;
use App\Models\Gender;

class DashboardController extends Controller
{
    public function index()
    {
        $companies = Company::all();
        $divisions = Division::all();
        $levels = Level::all();
        $genders = Gender::all();

        return view('dashboard', compact('companies', 'divisions', 'levels', 'genders'));
    }

    public function getData(Request $request)
    {
        // Ambil data dari database sesuai dengan filter yang diberikan
        $selectedCompany = $request->input('company');
        $selectedDivision = $request->input('division');
        $selectedLevel = $request->input('level');
        $selectedGender = $request->input('gender');

        // Proses data sesuai dengan filter dan kembalikan dalam format yang sesuai untuk ditampilkan dalam chart
        $data = [
            // Data untuk chart
        ];

        return response()->json($data);
    }
}
