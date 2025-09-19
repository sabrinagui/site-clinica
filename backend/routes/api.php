<?php

use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ContactController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// API Routes for Clinic
Route::prefix('v1')->group(function () {
    // Services routes
    Route::apiResource('services', ServiceController::class);
    
    // Appointments routes
    Route::apiResource('appointments', AppointmentController::class);
    
    // Contacts routes
    Route::apiResource('contacts', ContactController::class);
    
    // Public routes (no authentication required)
    Route::get('services/public', [ServiceController::class, 'index']);
    Route::post('appointments/book', [AppointmentController::class, 'store']);
    Route::post('contacts/send', [ContactController::class, 'store']);
});