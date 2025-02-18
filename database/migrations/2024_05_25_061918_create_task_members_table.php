<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::defaultStringLength(191);
        Schema::create('task_members', function (Blueprint $table) {
            $table->id();
            $table->integer('projectId');
            $table->integer('taskId');
            $table->integer('memberId');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::defaultStringLength(191);
        Schema::dropIfExists('task_members');
    }
};
